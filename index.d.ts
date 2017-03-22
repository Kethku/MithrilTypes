/// <reference path='./mithril-util.d.ts' />
/// <reference path='./mithril-promise.d.ts' />

declare namespace Mithril {
    type TextNode = string|Number|Boolean;
    type ChildrenType = Array<any>|TextNode;
    type QueryObject = { [key: string]: string | QueryObject | QueryObject[] };

    interface m {
        <S,A,C extends TextNode | any>(
        selector: string|Component<S, A, C[]>,
        attributes?: A,
        ...children: C[]
        ): VNode<S, A, C[]>;

        render<S, A, C extends ChildrenType>(element: Element, vNodes: VNode<S, A, C> | VNode<S, A, C>[]);

        route: {
            <S, A, C extends ChildrenType>(element: Element, defaultRoute: string, routes: { [route: string]: Component<S, A, C> | RouteResolver });

            set(path: string, data?: any, options?: {replace?: boolean, state?: any, title?: string});
            get(): string;
            prefix(prefix: string);
            link<S, A, C extends ChildrenType>(vnode: VNode<S, A, C>): (e: any) => void;
        }

        request<Data, Res, Ret>(url?: string | RequestOptions<Data, Res, Ret>, options?: RequestOptions<Data, Res, Ret>): Promise<Ret>;

        jsonp<Data, Res, Ret>(url?: string | JSONPOptions<Data, Res, Ret>, options?: JSONPOptions<Data, Res, Ret>): Promise<Ret>;

        parseQueryString(query: string): QueryObject;
        buildQueryString(query: QueryObject): string;

        withAttr<T, S>(attrName: string, callback:(this: S, attr:T) => void, thisObject: S): (any) => void;

        trust<S, A>(html: string): TrustedVNode<S, A>;

        fragment<S, A, C extends Array<any>>(attrs: A, children: C): FragmentVNode<S, A, C>;

        redraw();

        version: string;
    }

    interface JSONPOptions<Data, Res, Ret> {
        url: string;
        data?: Data;
        type?: (response: Res) => Ret;
        callbackName?: string;
        callbackKey?: string;
    }

    interface RequestOptions<Data, Res, Ret> {
        url: string;
        method?: string;
        data?: Data;
        async?: boolean;
        user?: string;
        password?: string;
        withCredentials?: string;
        config?: (xhr: XMLHttpRequest) => XMLHttpRequest;
        headers?: any;
        type?: (response:Res) => Ret;
        serialize?: (data: Data) => string;
        deserialize?: (res: string) => Res;
        extract?: (xhr: XMLHttpRequest, opts: RequestOptions<Data, Res, Ret>) => string;
        useBody?: boolean;
        background?: boolean;
    }

    interface RouteResolver {
        onMatch?<S, A, C extends ChildrenType>(args: any, requestedPath: string):Component<S, A, C> | Promise<Component<S, A, C>>;
        render?<S, A, C extends ChildrenType>(vnode: VNode<S, A, C>): VNode<S, A, C>;
    }

    interface VNode<S, A, C extends ChildrenType> {
        tag: string|Component<S, A, C>;
        key?: string;
        attrs?: A;
        children?: C|TextNode;
        text?: TextNode;
        dom?: Element;
        domSize?: Number;
        state?: S;
        events?: any;
    }

    interface ElementVNode<S, A, C extends ChildrenType> extends VNode<S, A, C> {
        tag: string;
    }

    interface FragmentVNode<S, A, C extends Array<any>> extends VNode<S, A, C> {
        tag: "[";
        children: C;
    }

    interface TextVNode<S, A> extends VNode<S, A, string> {
        tag: "#";
        children: string;
    }

    interface TrustedVNode<S, A> extends VNode<S, A, string> {
        tag: "<";
        children: string;
    }

    interface ComponentVNode<S, A, C extends ChildrenType> extends VNode<S, A, C> {
        tag: Component<S, A, C>;
    }

    type Component<S, A, C extends ChildrenType> = S & Events<S, A, C, VNode<S, A, C>> & {
        view: (VNode) => VNode<S, A, C>;
    }

    interface Events<S, A, C extends ChildrenType, V extends VNode<S, A, C>> {
        oninit?: (vNode: V) => void;
        oncreate?: (vNode: V) => void;
        onupdate?: (vNode: V) => void;
        onbeforeremove?: (vNode: V) => Promise<void>;
        onremove?: (vNode: V) => void;
        onbeforeupdate?: (vNode: V, old: boolean) => boolean;
    }
}
