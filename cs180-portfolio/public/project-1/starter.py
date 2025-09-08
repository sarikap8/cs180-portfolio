# CS180 (CS280A): Project 1 starter Python code

# these are just some suggested libraries
# instead of scikit-image you could use matplotlib and opencv to read, write, and display images

import numpy as np
import skimage as sk
import skimage.io as skio

# name of the input file
imname = 'cs180 proj1 data/cathedral.jpg'

# read in the image
im = skio.imread(imname)

# convert to double (might want to do this later on to save memory)    
im = sk.img_as_float(im)
    
# compute the height of each part (just 1/3 of total)
height = np.floor(im.shape[0] / 3.0).astype(int)

# separate color channels
b = im[:height]
g = im[height: 2*height]
r = im[2*height: 3*height]

def align_naive(im1, im2, border_percentage=0.15):
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

def align_optimized(im1, im2, border_percentage=0.15):
    

# align the images
# functions that might be useful for aligning the images include:
# np.roll, np.sum, sk.transform.rescale (for multiscale)

ag, g_displacement = align_naive(g, b)
ar, r_displacement = align_naive(r, b)

print(f"\nFinal displacements:")
print(f"Green displacement: {g_displacement}")
print(f"Red displacement: {r_displacement}")
# create a color image
im_out = np.dstack([ar, ag, b])

# save the image
fname = 'colorized_cathedral.jpg'
# Convert to uint8 for saving
im_out_save = (im_out * 255).astype(np.uint8)
skio.imsave(fname, im_out_save)

# display the image
skio.imshow(im_out)
skio.show()
