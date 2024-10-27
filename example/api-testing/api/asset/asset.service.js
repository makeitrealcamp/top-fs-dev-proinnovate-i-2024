const assets = [
  {
    id: '1',
    name: 'Asset 1',
    price: 100,
    slug: 'asset-1',
    image: 'https://via.placeholder.com/150',
    tokenAssetAddress: 'BQhCiUcQfDgoLLx6XUf6ne7kYe5YE8ZKMHpJ9j2yaW5N',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    name: 'Asset 2',
    price: 200,
    slug: 'asset-2',
    image: 'https://via.placeholder.com/150',
    tokenAssetAddress: 'BW7AjDhWJmdH7fsf8s7UkSaYm5CtvmUDjm5V7xy4jakh',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
  },
];

function getAllAssets() {
  return assets;
}

function getAssetBySlug(slug) {
  const asset = assets.find((asset) => asset.slug === slug);

  if (!asset) {
    return null;
  }

  return asset;
}

function getAssetById(id) {
  const asset = assets.find((asset) => asset.id === id);
  if (!asset) {
    return null;
  }

  return asset;
}

function createAsset(asset) {
  asset.id = assets.length + 1;

  assets.push(asset);

  return asset;
}

function updateAsset(id, asset) {
  const index = assets.findIndex((asset) => asset.id === id);

  if (index === -1) {
    return null;
  }

  assets[index] = asset;

  return asset;
}

function deleteAsset(id) {
  const asset = assets.find((asset) => asset.id === id);

  if (!asset) {
    return null;
  }

  assets.splice(assets.indexOf(asset), 1);

  return asset;
}

module.exports = {
  createAsset,
  deleteAsset,
  getAllAssets,
  getAssetById,
  getAssetBySlug,
  updateAsset,
};
