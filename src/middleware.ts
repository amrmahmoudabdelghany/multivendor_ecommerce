import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)", // Optional: Make API routes public if needed
]);

export default clerkMiddleware(async (auth, req) => {
  console.log("🏁 Middleware running for:", req.nextUrl.pathname);

  // 2. Protect non-public routes
  if (!isPublicRoute(req)) {
    console.log("🔒 Protecting route:", req.nextUrl.pathname);
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
