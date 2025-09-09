# CS180 (CS280A): Project 1 starter Python code

# these are just some suggested libraries
# instead of scikit-image you could use matplotlib and opencv to read, write, and display images

import numpy as np
import skimage as sk
import skimage.io as skio

# name of the input file
imname = 'cs180 proj1 data/emir.tif'

# read in the image
im = skio.imread(imname)

# convert to double
im = sk.img_as_float32(im)
    
# compute the height of each part (just 1/3 of total)
height = np.floor(im.shape[0] / 3.0).astype(int)

# separate color channels
b = im[:height]
g = im[height: 2*height]
r = im[2*height: 3*height]

def align_naive(im1, im2, border_percentage=0.10):
    h, w = im1.shape
    border = max(0, int(min(h, w) * border_percentage))

    # crop (use im2 as reference, im1 as moving)
    im1_crop = im1[border:h-border, border:w-border]
    im2_crop = im2[border:h-border, border:w-border]

    best_match = -np.inf
    best_displacement = (0, 0)

    for displacement_y in range(-15, 16):
        for displacement_x in range(-15, 16):
            dy, dx = displacement_y, displacement_x

            # Overlap-only the indices on cropped frames
            y0_ref = max(0,  dy)   # im2_crop
            y0_mov = max(0, -dy)   # im1_crop
            x0_ref = max(0,  dx)
            x0_mov = max(0, -dx)

            y_len = min(im2_crop.shape[0] - y0_ref, im1_crop.shape[0] - y0_mov)
            x_len = min(im2_crop.shape[1] - x0_ref, im1_crop.shape[1] - x0_mov)

            # updated windows 
            ref_win = im2_crop[y0_ref:y0_ref + y_len, x0_ref:x0_ref + x_len]
            mov_win = im1_crop[y0_mov:y0_mov + y_len, x0_mov:x0_mov + x_len]

            # ncc as metric
            a_mean, b_mean = ref_win.mean(), mov_win.mean()
            a_std,  b_std  = ref_win.std(),  mov_win.std()
            if a_std == 0 or b_std == 0:
                ncc = -np.inf # can't div by 0
            else:
                ncc = np.mean(((ref_win - a_mean) / a_std) * ((mov_win - b_mean) / b_std))

            if ncc > best_match:
                best_match = ncc
                best_displacement = (dy, dx)

    # Apply the best shift to not cropped im1 (moving) with wrap
    moved = np.roll(im1, best_displacement, axis=(0, 1))
    print(f"Best displacement: {best_displacement}, NCC score: {best_match:.4f}")
    return moved, best_displacement


def align_optimized(max_depth, im1, im2, border_percentage=0.10):
    # base case align_naive
    if max_depth <= 0:
        moved, shift = align_naive(im1, im2, border_percentage=border_percentage)
        return moved, shift # (just dy, dx)

    # downscale images by 2
    im1_small = sk.transform.rescale(im1, 0.5, anti_aliasing=False, channel_axis=None, preserve_range=True)
    im2_small = sk.transform.rescale(im2, 0.5, anti_aliasing=False, channel_axis=None, preserve_range=True)

    # align the downscaled images recursively
    _, coarse_shift = align_optimized(max_depth - 1, im1_small, im2_small, border_percentage=border_percentage)
    
    # scale the shift up
    coarse_dy = int(round(coarse_shift[0] * 2))
    coarse_dx = int(round(coarse_shift[1] * 2))

    # roll the coarse shift to the moving image, then run align_naive to find a fine correction.
    im1_coarsely_aligned = np.roll(im1, shift=(coarse_dy, coarse_dx), axis=(0, 1))
    _, fine_shift = align_naive(im1_coarsely_aligned, im2, border_percentage=border_percentage)

    # combine all the stuff from earlier
    total_shift = (coarse_dy + fine_shift[0], coarse_dx + fine_shift[1])

    # apply total shift to the original im1
    moved_fullres = np.roll(im1, shift=total_shift, axis=(0, 1))
    return moved_fullres, total_shift


# align the images
# functions that might be useful for aligning the images include:
# np.roll, np.sum, sk.transform.rescale (for multiscale)


# ag, g_displacement = align_naive(g, b)
# ar, r_displacement = align_naive(r, b)

ag, g_displacement = align_optimized(3, g, b, border_percentage=0.10)
ar, r_displacement = align_optimized(3, r, b, border_percentage=0.10)

print(f"\nFinal displacements:")
print(f"Green displacement: {g_displacement}")
print(f"Red displacement: {r_displacement}")
# create a color image
im_out = np.dstack([ar, ag, b])

# save the image
fname = 'colorized_emir.jpg'
# Convert to uint8 for saving
im_out_save = (im_out * 255).astype(np.uint8)
skio.imsave(fname, im_out_save)

# display the image
skio.imshow(im_out)
skio.show()
