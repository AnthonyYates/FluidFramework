/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { PrimedComponentFactory } from "@microsoft/fluid-aqueduct";
import { IComponentFactory } from "@microsoft/fluid-runtime-definitions";
import { SharedString } from "@microsoft/fluid-sequence";
import { TextBox } from "./index";

export const TextBoxInstantiationFactory: IComponentFactory = new PrimedComponentFactory(
    TextBox,
    [
        SharedString.getFactory(),
    ],
);