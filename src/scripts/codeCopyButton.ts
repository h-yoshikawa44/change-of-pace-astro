/* eslint-env browser */

// navigator.clipboard が使えない環境向け
const selectElement = (element: HTMLElement) => {
  const selection = document.getSelection();
  selection?.removeAllRanges();
  const range = document.createRange();
  range.selectNode(element);
  selection?.addRange(range);
};

const copyCode = (codePre: HTMLPreElement): void => {
  const code = codePre.querySelector('code');
  const codeText = code?.innerText;
  if (!codeText) return;

  navigator.clipboard.writeText(codeText).catch(() => {
    selectElement(code);
  });
};

const resetCopyButtonText = (ele: HTMLButtonElement) => {
  setTimeout(() => {
    ele.innerText = 'Copy';
  }, 3000);
};

const onCopy = (ev: MouseEvent, codePre: HTMLPreElement) => {
  if (!(ev.target instanceof HTMLButtonElement)) return;

  copyCode(codePre);
  ev.target.innerText = 'Copied!';
  resetCopyButtonText(ev.target);
};

const createCopyButton = (code: HTMLPreElement): HTMLButtonElement => {
  const button = document.createElement('button');
  button.className = 'copy-code-button';
  button.type = 'button';
  button.innerText = 'Copy';
  button.addEventListener('click', (ev) => onCopy(ev, code));

  return button;
};

const codePreCollection = document.querySelectorAll('pre.astro-code');
codePreCollection.forEach((codePre: HTMLPreElement) => {
  codePre.appendChild(createCopyButton(codePre));
});
