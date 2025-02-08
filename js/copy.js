document.getElementById("copyText").addEventListener("click", function () {
    const textToCopy = this.textContent; // 클릭한 요소의 텍스트 가져오기
    navigator.clipboard.writeText(textToCopy) // 클립보드에 텍스트 복사
        .then(() => {
            alert("텍스트가 복사되었습니다: " + textToCopy);
        })
        .catch(err => {
            console.error("텍스트 복사 실패: ", err);
        });
});
document.getElementById("copyTExt").addEventListener("click", function () {
    const textToCopy = this.textContent; // 클릭한 요소의 텍스트 가져오기
    navigator.clipboard.writeText(textToCopy) // 클립보드에 텍스트 복사
        .then(() => {
            alert("텍스트가 복사되었습니다: " + textToCopy);
        })
        .catch(err => {
            console.error("텍스트 복사 실패: ", err);
        });
});
