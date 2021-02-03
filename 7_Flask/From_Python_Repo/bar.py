from tqdm import tqdm
import time
pbar = tqdm(["a", "b", "c", "d"])
for char in pbar:
    time.sleep(0.5)
    pbar.set_description("Processing %s" % char)
