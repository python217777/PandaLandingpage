// components/layout/PageContainer.tsx
import type { FC, ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return <>{children}</>;
};

export default PageContainer;
