

export const changeToggleIcon = (toggle,label) => {
    const labelBtn = document.querySelector(label);
    const toggleBtn = document.querySelector(toggle);

    toggleBtn.addEventListener('change', () => {
        if (toggleBtn.checked){
            labelBtn.innerHTML = "X";
        } else {
            labelBtn.innerHTML = "<i class='bx bx-menu'></i>";
        }
    })
}
