import NodeCache from "node-cache";
export const cache = new NodeCache({ stdTTL: 2000 });
export const verifyCache = (req, res, next) => {
  try {
    const { category } = req.params;
    if (cache.has(category)) {
      return res.status(200).json(cache.get(category));
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
