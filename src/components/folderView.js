import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const FolderView = () => {

    return (
        <>
            <SimpleBar
                id="folderView"
                className="panel"
                forceVisible="y"
                autoHide={false}
            >
                
            </SimpleBar>
        </>
    );
}

export default FolderView;