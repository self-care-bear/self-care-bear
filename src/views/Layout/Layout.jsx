import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      {/* // header */}
      <main>{children}</main>
      {/* // footer */}
    </div>
  );
}
