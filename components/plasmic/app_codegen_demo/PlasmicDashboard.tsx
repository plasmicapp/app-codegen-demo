// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: buzXQZLRHRnzx37qjmm2UD
// Component: Z2--9s1Pjn-v

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Header from "../../Header"; // plasmic-import: IBzB1z8_37wm/component
import UsersModule from "../../UsersModule"; // plasmic-import: qqFD2GcyeBVD/component
import GraphModule from "../../GraphModule"; // plasmic-import: SFRojVZndsn7/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: buzXQZLRHRnzx37qjmm2UD/projectcss
import sty from "./PlasmicDashboard.module.css"; // plasmic-import: Z2--9s1Pjn-v/css

createPlasmicElementProxy;

export type PlasmicDashboard__VariantMembers = {};
export type PlasmicDashboard__VariantsArgs = {};
type VariantPropType = keyof PlasmicDashboard__VariantsArgs;
export const PlasmicDashboard__VariantProps = new Array<VariantPropType>();

export type PlasmicDashboard__ArgsType = {};
type ArgPropType = keyof PlasmicDashboard__ArgsType;
export const PlasmicDashboard__ArgProps = new Array<ArgPropType>();

export type PlasmicDashboard__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  section?: Flex__<"section">;
  columns?: Flex__<"div">;
  usersModule?: Flex__<typeof UsersModule>;
  graphModule?: Flex__<typeof GraphModule>;
};

export interface DefaultDashboardProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDashboard__RenderFunc(props: {
  variants: PlasmicDashboard__VariantsArgs;
  args: PlasmicDashboard__ArgsType;
  overrides: PlasmicDashboard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column___9CuW8)}
              >
                <UsersModule
                  data-plasmic-name={"usersModule"}
                  data-plasmic-override={overrides.usersModule}
                  className={classNames("__wab_instance", sty.usersModule)}
                />
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__yzB9H)}
              >
                <GraphModule
                  data-plasmic-name={"graphModule"}
                  data-plasmic-override={overrides.graphModule}
                  className={classNames("__wab_instance", sty.graphModule)}
                />
              </Stack__>
            </Stack__>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "columns", "usersModule", "graphModule"],
  header: ["header"],
  section: ["section", "columns", "usersModule", "graphModule"],
  columns: ["columns", "usersModule", "graphModule"],
  usersModule: ["usersModule"],
  graphModule: ["graphModule"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: "section";
  columns: "div";
  usersModule: typeof UsersModule;
  graphModule: typeof GraphModule;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDashboard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDashboard__VariantsArgs;
    args?: PlasmicDashboard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDashboard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDashboard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDashboard__ArgProps,
          internalVariantPropNames: PlasmicDashboard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDashboard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDashboard";
  } else {
    func.displayName = `PlasmicDashboard.${nodeName}`;
  }
  return func;
}

export const PlasmicDashboard = Object.assign(
  // Top-level PlasmicDashboard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    columns: makeNodeComponent("columns"),
    usersModule: makeNodeComponent("usersModule"),
    graphModule: makeNodeComponent("graphModule"),

    // Metadata about props expected for PlasmicDashboard
    internalVariantProps: PlasmicDashboard__VariantProps,
    internalArgProps: PlasmicDashboard__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDashboard;
/* prettier-ignore-end */
