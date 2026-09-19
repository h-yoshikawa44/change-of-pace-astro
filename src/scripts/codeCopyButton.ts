/* global */

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
  } catch (_err) {
    ev.target.innerText = 'Failed...';
  }
  resetCopyButtonText(ev.target);
};

const createCopyButton = (code: HTMLPreElement): HTMLButtonElement => {
  const button = document.createElement('button');
  button.className = `copy-code-button`;
  button.type = 'button';
  button.innerText = 'Copy';
  button.addEventListener('click', (ev) => onCopy(ev, code));

  return button;
};

const getCopyButtonTop = (codeContainer: Element): number => {
  // コピーボタンの top がコードブロックタイトル要素の高さに依存するので、高さを取得
  const codeTitle = Array.from(codeContainer.children).find(
    (children) => children.classList.value === 'remark-code-title',
  );
  const codeTitleHeight = codeTitle?.clientHeight;

  return codeTitleHeight ? codeTitleHeight + 1 : 1;
};

const updateCopyButtonTop = (
  codeContainer: Element,
  copyButton: HTMLButtonElement,
) => {
  // Tailwind の動的クラスだと、うまくスタイルが当たらないため、style で付与する
  copyButton.setAttribute(
    'style',
    `top: ${getCopyButtonTop(codeContainer)}px`,
  );
};

const codeContainerCollection = document.querySelectorAll(
  'div.remark-code-container',
);
codeContainerCollection.forEach((codeContainer: Element) => {
  // 子の先頭にコードブロックタイトル要素がつく場合があるので、find で pre 要素を探す
  const codePre = Array.from(codeContainer.children).find(
    (children) => children instanceof HTMLPreElement,
  );
  if (codePre instanceof HTMLPreElement) {
    const copyButton = createCopyButton(codePre);
    codeContainer.appendChild(copyButton);
    updateCopyButtonTop(codeContainer, copyButton);

    // PC は画面のサイズを変えることがあるので、resize を検知して top を設定しなおす
    window.addEventListener('resize', () => {
      updateCopyButtonTop(codeContainer, copyButton);
    });
  }
});
