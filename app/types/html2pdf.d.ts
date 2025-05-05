declare module "html2pdf.js" {
    const html2pdf: {
      default: (options?: any) => {
        set: (config: any) => any;
        from: (element: HTMLElement) => any;
        save: () => Promise<void>;
      };
    };
    export default html2pdf;
  }