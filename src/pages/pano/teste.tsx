
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import React from 'react';

function App() {
  const photoSphereRef = React.useRef(null);

  const handleClick = () => {
    photoSphereRef.current.animate({
      latitude: 0,
      longitude: 0,
      zoom: 55,
      speed: '10rpm',
    });
  }

  return (
    <>
    <div className="App">
      <ReactPhotoSphereViewer ref={photoSphereRef}
        src="http://aws-s3-upload-ash.s3.sa-east-1.amazonaws.com/next-s3-uploads/3262685a-c39d-47e6-872e-8941c7182b52/7.jpg"
        littlePlanet={true} height={100} width={100} onClick={handleClick} container={''}></ReactPhotoSphereViewer>
      </div>
      </>
  );
}

export default App;