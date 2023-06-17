/* eslint-env browser */

const copyCode = async (codePre: HTMLPreElement): Promise<void> => {
  const code = codePre.querySelector('code');
  const codeText = code?.innerText;
  if (!codeText) return;

  await navigator.clipboard.writeText(codeText);
};

const resetCopyButtonText = (ele: HTMLButtonElement) => {
  setTimeout(() => {
    ele.innerText = 'Copy';
  }, 3000);
};

const onCopy = async (ev: MouseEvent, codePre: HTMLPreElement) => {
  if (!(ev.target instanceof HTMLButtonElement)) return;

  try {
    await copyCode(codePre);
    ev.target.innerText = 'Copied!';
  } catch (err) {
    ev.target.innerText = 'Failed...';
  }
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

const codeContainerCollection = document.querySelectorAll(
  'div.remark-code-container'
);
codeContainerCollection.forEach((codeContainer: HTMLDivElement) => {
  const childrenList = Array.from(codeContainer.children);
  // 子の先頭にコードブロックタイトル要素がつく場合があるので、find で pre 要素を探す
  const codePre = childrenList.find(
    (children) => children instanceof HTMLPreElement
  );
  if (codePre instanceof HTMLPreElement) {
    codeContainer.appendChild(createCopyButton(codePre));
  }
});
