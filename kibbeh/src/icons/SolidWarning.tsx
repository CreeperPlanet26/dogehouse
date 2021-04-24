import * as React from "react";

export default function SvgSolidWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.95727 1.22762L0.147124 13.6558C-0.283558 14.4326 0.289402 15.3824 1.18922 15.3824H14.8134C15.7093 15.3824 16.2823 14.4326 15.8555 13.6558L9.04146 1.22762C8.59156 0.412407 7.40718 0.412407 6.95727 1.22762V1.22762ZM8.67615 6.38426L8.53772 11.0756H7.46102L7.32258 6.38426H8.67615ZM7.99937 13.6289C7.58791 13.6289 7.2649 13.3174 7.2649 12.9214C7.2649 12.5253 7.58791 12.2138 7.99937 12.2138C8.41082 12.2138 8.73383 12.5253 8.73383 12.9214C8.73383 13.3174 8.41082 13.6289 7.99937 13.6289Z" />
    </svg>
  );
}
