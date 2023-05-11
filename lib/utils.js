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

const merge = function(merger, ...collections) {
  return collections[0].map(function(_, index) {
    return merger(...collections.map(function(collection) {
      return collection[index];
    }));
  });
}

const range = function(start, end) {
  return new Array(end - start + 1).fill().map(function(_, i) {
    return i + start;
  });
}

exports.chunk = chunk;
exports.merge = merge;
exports.range = range;