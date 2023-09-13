export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSchema';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';
