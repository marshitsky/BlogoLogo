import { ReactNode } from "react";
import { createPortal } from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
}

interface IPortalProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ children, target }: IPortalProps) => {
  const container = document.getElementById(target) as HTMLElement;
  return createPortal(children, container);
};
