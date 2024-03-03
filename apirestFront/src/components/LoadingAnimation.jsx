

export const LoadingAnimation = () => {

    const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        n.map((n) => {
            return (
              <div
                className="bg-zinc-800 p-4 flex justify-around items-center rounded-lg animate-pulse"
                key={n}
              >
                <div className="name bg-zinc-700 animate-pulse rounded-2xl p-4 w-64"></div>
                <div className="last bg-zinc-700 animate-pulse rounded-2xl p-4 w-64"></div>
                <div className="role bg-zinc-700 animate-pulse rounded-lg p-4 w-64"></div>
              </div>
            );
          })
    )
}