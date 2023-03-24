import NodeCache from "node-cache";
export const cache = new NodeCache({ stdTTL: 4000 });
export const verifyCache = (req, res, next) => {
  try {
    const category = req.params.category;
    const key = "latest";
    if (cache.has(key)) {
      return res.status(200).json(cache.mget([category, key]));
    }
    return next();
  } catch (e) {
    console.error(e);
  }
};
export const verifyCacheP = (req, res, next) => {
  try {
    const category = req.params.category;
    const key = "popular";
    if (cache.has(key)) {
      return res.status(200).json(cache.mget([category, key]));
    }
    return next();
  } catch (e) {
    console.error(e);
  }
};
export const verifyCacheForBlog = (req, res, next) => {
  try {
    const { id } = req.params;
    if (cache.has(id)) {
      return res.status(200).json(cache.get(id));
    }
    return next();
  } catch (e) {
    console.log(e);
  }
};
