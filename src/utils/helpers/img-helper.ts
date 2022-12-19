export function getPublicImg(url: string){
    return process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_PATH}/${url}` : `/${url}`
}
