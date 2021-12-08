import File from './file';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import filesList from '../files';

const FolderView = () => {

    return (
        <>
            <SimpleBar
                id="folderView"
                className="panel"
                forceVisible="y"
                autoHide={false}
            >
                {filesList.map((element, index) => {
                    return (
                        <File
                            key={index} 
                            fileType={element.type}
                            fileName={element.name}
                        />
                    )
                })}
            </SimpleBar>
        </>
    );
}

export default FolderView;