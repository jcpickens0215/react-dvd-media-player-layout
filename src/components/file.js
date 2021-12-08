

const File = (props) => {

    let iconSrc;

    switch (props.fileType) {
        case "FOLDER":
            iconSrc = './assets/images/icons/MT1389 folder.png';
            break;
        case "MP3":
            iconSrc = './assets/images/icons/MT1389 MP3 (Blue).png';
            break;
        default:
            iconSrc = './assets/images/icons/MT1389 SACD.png';
            break;
    }


    return (
        <div className="file">
            <img src={iconSrc} alt="Icon"/>
            <p>{props.fileName}</p>
        </div>
    );
}

export default File;