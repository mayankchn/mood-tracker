export const HAPPY_BUTTON_CLICKED = "happy button clicked"
export const SAD_BUTTON_CLICKED = "sad button clicked"
export const REFRESH_BUTTON_CLICKED = "refresh button clicked"

export const happyButtonClicked = (intensity:number, when:Date) => ({
    type: HAPPY_BUTTON_CLICKED,
    payload: {intensity,when},
});

export const sadButtonClicked = (intensity:number,when:Date) => ({
    type: SAD_BUTTON_CLICKED,
    payload:{intensity,when},
});

export const refreshButtonClicked = () => ({
    type: REFRESH_BUTTON_CLICKED,
})