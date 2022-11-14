import React from 'react';

const Video = () => {
    return (
        <div className='w-full flex-col p-10 mt-14 flex justify-center bg-kokroq items-center'>
                           <h1 className='text-xl text-blue'>Universitet haqida video ro'lok</h1>
             <iframe className='rounded-xl mt-16' width="1100" height="515" src="https://www.youtube.com/embed/c5vZbcEwWIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    );
}

export default Video;
