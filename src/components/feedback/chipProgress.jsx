import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material";
import styles from "./chipProgress.module.css";

function ChipProgress({
  style,
  loading,
  info = false,
  hideIcon = false,
  success,
  size = "default",
  children,
  ...props
}) {
  const theme = useTheme();
  const spinnerSizeMapping = {
    large: 30,
    default: 18,
    small: 15,
  };

  const renderIcon = (loading, success, size, theme, styles) => {
    if (loading) {
      return (
        <div className={styles.component} style={{ margin: "2.5px" }}>
          <CircularProgress thickness={4} size={spinnerSizeMapping[size]} />
        </div>
      );
    }

    if (success) {
      return (
        <CheckCircleIcon
          className={styles.component}
          fontSize={size}
          style={{ color: theme.palette.success.main }}
        />
      );
    }

    if (info) {
      return (
        <InfoIcon
          className={styles.component}
          fontSize={size}
          style={{ color: theme.palette.info.main }}
        />
      );
    }

    return (
      <CancelIcon
        className={styles.component}
        fontSize={size}
        style={{ color: theme.palette.error.main }}
      />
    );
  };

  return (
    <div className={styles.wrapper} style={style}>
      {!hideIcon && renderIcon(loading, success, size, theme, styles)}

      <div
        style={{
          marginLeft: `${hideIcon ? 0 : spinnerSizeMapping[size]}px`,
          transition: "margin-left 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ChipProgress;

ChipProgress.propTypes = {
  style: PropTypes.object,
  loading: PropTypes.bool,
  info: PropTypes.bool,
  hideIcon: PropTypes.bool,
  success: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "default", "large"]),
};
