const chunk = function(chunkSize, collection, overlap) {
  const last = function(list) {
      return list.at(-1);
  }

  const makeChunk = function(chunks, element, chunkSize, overlap) {
    if(!last(chunks)) chunks.push([]);

    if (last(chunks).length === chunkSize) {
      chunks.push(last(chunks).slice(chunkSize - overlap));
    }

    last(chunks).push(element);

    return chunks;
  }

  return collection.reduce(function(chunks, element) {
    return makeChunk(chunks, element, chunkSize, overlap);
  }, []);
}

const map = function(mapper, ...collections) {
  return collections[0].map(function(_, index) {
    return mapper(...collections.map(function(collection) {
      return collection[index];
    }));
  });
}

exports.chunk = chunk;
exports.map = map;