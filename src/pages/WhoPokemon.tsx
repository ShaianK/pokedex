import Dropzone from 'react-dropzone'

export default function WhoPokemon() {
    return (
        <>
            <div className="h-screen bg-gray-200 flex flex-col justify-center items-center ">
                

                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <div className='w-[40%] h-[20%] bg-white flex items-center justify-center'{...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        )}
                    </Dropzone>
                
                <button className="bg-blue-200 mt-4">
                    submit
                </button>
            </div>
        </>
    )
}