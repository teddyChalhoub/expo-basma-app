import { colors, size } from "./Theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",

  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: size.width / 1.3,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    borderColor: colors.lightPrimary,
    marginTop: 20
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    fontFamily: 'Inter_900Black',
    color: colors.primary
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-evenly"
  }
};