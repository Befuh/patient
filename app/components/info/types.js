export const InfoTypes = (theme) => ({
  _base: {
    section: {
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: 1,
      height: 80,
      borderColor: theme.colors.border.base,
      backgroundColor: theme.colors.screen.base
    },
    header: {
      flexDirection: 'row',
      height: 40
    },
    title: {
      flex: 1
    },
    subTitle: {
      flex: 1,
      textAlign: 'right'
    },
    info: {
      height: 40,
      justifyContent: 'flex-end'
    }
  },
  big: {
    section: {
      height: 102
    },
    header: {
      height: 51
    },
    info: {
      height: 51
    }
  }
});
