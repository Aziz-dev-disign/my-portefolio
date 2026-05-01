import { Component, ErrorInfo, ReactNode } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

type Props = WithTranslation & { children: ReactNode };
type State = { error: Error | null };

class ErrorBoundaryBase extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  reset = () => {
    this.setState({ error: null });
  };

  render() {
    if (!this.state.error) return this.props.children;
    const { t } = this.props;

    return (
      <div className="theme-blue flex h-[100svh] w-full flex-col items-center justify-center bg-bgColor px-6 text-primaryColor">
        <div className="w-full max-w-xl">
          <div className="html-tag pb-2">{t("errorBoundary.tag")}</div>

          <h1 className="pb-3 pl-4 text-3xl font-bold sm:text-4xl">
            {t("errorBoundary.titleLead")}{" "}
            <span className="text-themePrimaryColor">
              {t("errorBoundary.titleAccent")}
            </span>{" "}
            {t("errorBoundary.titleTail")}
          </h1>

          <p className="pb-6 pl-4 text-textEditorColor">
            {t("errorBoundary.message")}
          </p>

          {import.meta.env.DEV && (
            <pre className="mb-6 ml-4 max-h-40 overflow-auto rounded border border-leftSideBorder bg-tabBarBgColor p-3 text-xs text-red-400">
              {this.state.error.message}
              {"\n"}
              {this.state.error.stack}
            </pre>
          )}

          <div className="flex flex-col gap-3 pl-4 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                this.reset();
                window.location.href = "/";
              }}
              className="rounded btn"
            >
              {t("errorBoundary.home")}
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded btn-secondary"
            >
              {t("errorBoundary.reload")}
            </button>
          </div>

          <div className="html-tag pt-6">{t("errorBoundary.tagClose")}</div>
        </div>
      </div>
    );
  }
}

export const ErrorBoundary = withTranslation()(ErrorBoundaryBase);
export default ErrorBoundary;
