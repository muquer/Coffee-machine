
export interface ExtraSubselection{
    _id:string;
    name: string;
}

export interface Extra{
    _id: string;
    name: string;
    subselections: ExtraSubselection[]
}