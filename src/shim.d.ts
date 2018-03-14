interface NodeModule {
  hot: {
    accept: (path?: string, callback?: () => void) => void
  }
}

declare const ROUTE_BASE: string
