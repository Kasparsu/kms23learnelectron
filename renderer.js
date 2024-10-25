document.addEventListener('DOMContentLoaded', async () => {

    const filesEl = document.querySelector('#files');
    let files = await window.electronAPI.getFiles('C:\\');
    files.forEach(file => {
        let fileEl = document.createElement('li');
        fileEl.innerText = file.name;
        if(file.isDir == true){
            fileEl.addEventListener('click', () => {
                console.log('click');
            });
        }
        filesEl.append(fileEl);
    });
    
    console.log(files);

});

