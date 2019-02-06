import { combineReducers } from 'redux';
import { studentListReducer } from './studentListReducer';
import { reducer as FormReducer } from 'redux-form';
import { toastReducer } from './toasts.reducer';

const rootReducer = combineReducers({
    studentList: studentListReducer,
    form: FormReducer,
    toasts: toastReducer
});

export default rootReducer;