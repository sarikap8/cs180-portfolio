# CS180 (CS280A): Project 1 starter Python code

# these are just some suggested libraries
# instead of scikit-image you could use matplotlib and opencv to read, write, and display images

import numpy as np
import skimage as sk
import skimage.io as skio

# name of the input file
imname = 'cs180 proj1 data/monastery.jpg'

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
    pass

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
fname = 'colorized_monastery.jpg'
# Convert to uint8 for saving
im_out_save = (im_out * 255).astype(np.uint8)
skio.imsave(fname, im_out_save)

# display the image
skio.imshow(im_out)
skio.show()
