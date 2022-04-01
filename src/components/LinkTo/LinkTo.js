import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function LinkTo({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ color: match ? "#ff9900" : "#fff" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default LinkTo;