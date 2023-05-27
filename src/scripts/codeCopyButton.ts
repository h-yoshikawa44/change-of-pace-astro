/* eslint-env browser */

const codeTextList = document.querySelectorAll('pre.astro-code');

// navigator.clipboard が使えない環境向け
const selectElement = (element: HTMLElement) => {
  const selection = document.getSelection();
  selection?.removeAllRanges();
  const range = document.createRange();
  range.selectNode(element);
  selection?.addRange(range);
};

const copyCode = (): void => {
  const code = codeTextList[0].querySelector('code');
  const codeText = code?.innerText;
  if (!codeText) return;

  navigator.clipboard.writeText(codeText).catch(() => {
    selectElement(code);
  });
};

const ResetCopyButtonText = (ele: HTMLButtonElement) => {
  setTimeout(() => {
    ele.innerText = 'Copy';
  }, 3000);
};

const onCopy = (ev: MouseEvent) => {
  if (!(ev.target instanceof HTMLButtonElement)) return;

  copyCode();
  ev.target.innerText = 'Copied!';
  ResetCopyButtonText(ev.target);
};

const createCopyButton = (): HTMLButtonElement => {
  const button = document.createElement('button');
  button.className = 'copy-code-button';
  button.type = 'button';
  button.innerText = 'Copy';
  button.addEventListener('click', onCopy);

  return button;
};

const codeCollection = document.getElementsByClassName('astro-code');
const codeList = Array.from(codeCollection);
codeList.forEach((code) => {
  code.appendChild(createCopyButton());
});
