import React from 'react';

export function addHeader(request) {
    let csrfToken = document.getElementsByName("csrf-token")[0].content;
    return request
      .set('X-CSRF-TOKEN', csrfToken)
      .set('X-Requested-With', 'XMLHttpRequest');
}

export function getCsrfTokenTag() {
  let csrfToken = document.getElementsByName("csrf-token")[0].content;
  return (
      <input type="hidden" name="_token" value={csrfToken} />
  )
}