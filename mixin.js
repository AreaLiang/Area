import {mapGetters} from 'vuex'
export const globalFontSize={
	computed:{
		...mapGetters('systemSettings',['getGlobalFontSize'])
	}
}