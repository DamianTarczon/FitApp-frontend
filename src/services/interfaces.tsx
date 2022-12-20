export interface StepHeaderProps {
    buttons: {
        number: string,
        text: string,
        selected: boolean,
        completed: boolean
        }[]
    
}

export interface StepButtonProps {
        number: string,
        text: string,
        selected: boolean,
        completed: boolean
}

export interface RoundIconProps {
    text: string,
    selected: boolean,
    completed: boolean,
}