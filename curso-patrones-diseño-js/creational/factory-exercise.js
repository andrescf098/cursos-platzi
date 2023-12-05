class HttpAdapterBase {
  constructor(string) {
    this.HttpAdapter = string;
  }
}

class HttpAdapter extends HttpAdapterBase {
  constructor() {
    super('http');
  }
  get() {
    console.log('get');
  }
  post() {
    console.log('post');
  }
  put() {
    console.log('put');
  }
  delete() {
    console.log('delete');
  }
}

class HttpAdapterFactory {
  makeAdapter() {
    throw new Error('This method should be overwritten!');
  }
}

class HttpAdapterExpress extends HttpAdapterFactory {
  makeAdapter() {
    return new HttpAdapter();
  }
}

function appAdapter(adapter) {
  const httpAdapter = adapter.makeAdapter();
  httpAdapter.get();
}
