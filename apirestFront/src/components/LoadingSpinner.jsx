import '../assets/css/spinner.css'

export const LoadingSpinner = () => {
    return (
        <div className="container flex flex-col items-center bg-transparent w-full h-full justify-center itmes-center">
          <div className="spinner"></div>
        </div>
    )
}