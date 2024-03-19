export interface FormProps {
    onSearch: (query: string) => void;
}

export interface GifResult {
    images: { 
        original: { url: string }, 
        original_still: { url: string } 
    };
    id: string;
    url: string;
    title: string;
}
  
export interface ListingProps {
    results: GifResult[];
}

