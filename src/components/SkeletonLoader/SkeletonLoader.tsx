import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonLoader = () => (
  <ContentLoader speed={0.8} viewBox="0 0 352 388" height={388} width={352}>
    <rect x="3" y="3" rx="10" ry="10" width="348" height="180" />
    <rect x="3" y="215" rx="0" ry="0" width="348" height="16" />
    <rect x="3" y="245" rx="0" ry="0" width="348" height="36" />
  </ContentLoader>
);

SkeletonLoader.metadata = {
  name: "RJavlonbek",
  github: "RJavlonbek",
  description: "Blog item",
  filename: "BlogItem",
};
