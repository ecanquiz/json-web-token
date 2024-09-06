export default function middlewarePipeline(context:any, middleware:any, index:any) {
  const nextMiddleware = middleware[index];
  if (!nextMiddleware) {
    return context.next;
  }
  return () => {
    nextMiddleware({
      ...context,
      next: middlewarePipeline(context, middleware, index + 1),
    });
  };
}
