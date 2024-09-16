import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backGroundMainColor,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.backGroundMainColor,
  },
  mainContentContainer: {
    flex: 1,
    backgroundColor: colors.backGroundMainColor,
    marginHorizontal: 16,
  },
  mainContentScroll: {
    flex: 1,
    backgroundColor: colors.backGroundMainColor,
  },
  restrauntContainer: {
    height: 220,
    width: '100%',
    borderRadius: 26,
  },
  logoRestraunt: {
    height: 164,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageContainerStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomElement: {
    height: 56,
    width: '100%',
    backgroundColor: colors.white,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    padding: 14,
    flexDirection: 'row',
  },
  generalDistanceText: {
    color: colors.textDarkGrey,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22.5,
  },
  distanceText: {
    color: colors.textLightBrown,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22.5,
  },
  subElementContainer: {
    minHeight: 46,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  subElement: {
    minHeight: 44,
    minWidth: 89,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginRight: 20,
    marginBottom: 10
  },
  elementText: {
    color: colors.textDarkGrey,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 19.6,
  },
  allMenuItemContainer: {
    minHeight: 60,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    justifyContent: 'space-between',
    marginBottom: 80,
  },
  titleText: {
    color: colors.textDarkGrey,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22.5,
  },
  buttonCartContainer: {
    height: 114,
    width: '100%',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    marginBottom: -30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  buttonContainerCart: {
    height: 64,
    width: '80%',
    backgroundColor: colors.buttonBackGroundColor,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerDelete: {
    height: 64,
    width: 64,
    borderRadius: 16,
    backgroundColor: colors.borderGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTextView: {
    color: colors.white,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22.5,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.backGroundMainColor,
  },
  containerSearchModal: {
    flex: 1,
    backgroundColor: colors.backGroundMainColor,
    paddingTop: 50,
  },
  containerSearchMain: {
    height: 50,
    width: '100%',
    alignItems: 'center',
  },
  containerSearchHeader: {
    height: 45,
    width: '93%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    height: 45,
    width: '80%',
  },
  inputStyle: {
    height: 45,
    width: '100%',
    backgroundColor: colors.borderGrey,
    borderRadius: 14,
    paddingLeft: 50,
  },
  cancelButton: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconInputStyle: {
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
  },
  cancelGraveView: {
    position: 'absolute',
    marginTop: 10,
    marginRight: 10,
    right: 0,
  },
  textCancelModal: {
    color: colors.textDarkGrey,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22.5,
  },
  itemSearchContainer: {
    minHeight: 60,
    width: '92%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    justifyContent: 'space-between',
    marginHorizontal: '4%',
  },
  nothingInSearchContainer: {
    flex: 1,
    alignItems: 'center',
    top: '25%',
  },
  nothingFindText: {
    marginTop: 24,
    color: colors.textDarkGrey,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22.5,
  },
  shareContainer: {
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    margin: 16,
  },
});

export default styles;
