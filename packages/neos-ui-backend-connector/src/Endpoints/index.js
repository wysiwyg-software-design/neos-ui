import {urlWithParams, searchParams} from './Helpers';

import fetchWithErrorHandling from '../FetchWithErrorHandling/index';

export default routes => {
    const change = changes => fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.ui.service.change,

        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            changes
        })
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const publish = (nodeContextPaths, targetWorkspaceName) => fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.ui.service.publish,
        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nodeContextPaths,
            targetWorkspaceName
        })
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const discard = nodeContextPaths => fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.ui.service.discard,

        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nodeContextPaths
        })
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const changeBaseWorkspace = (targetWorkspaceName, documentNode) => fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.ui.service.changeBaseWorkspace,

        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            targetWorkspaceName,
            documentNode
        })
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const copyNode = node => fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.ui.service.copyNode,

        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            node
        })
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const cutNode = node => fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.ui.service.cutNode,

        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            node
        })
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const clearClipboard = () => fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.ui.service.clearClipboard,

        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json'
        }
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const loadImageMetadata = imageVariantUuid => fetchWithErrorHandling.withCsrfToken(() => ({
        url: `${routes.core.content.imageWithMetadata}?image=${imageVariantUuid}`,

        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    /**
     * asset[adjustments][Neos\Media\Domain\Model\Adjustment\CropImageAdjustment][height]:85
     * asset[adjustments][Neos\Media\Domain\Model\Adjustment\CropImageAdjustment][position]:10
     * asset[adjustments][Neos\Media\Domain\Model\Adjustment\CropImageAdjustment][width]:210
     * asset[adjustments][Neos\Media\Domain\Model\Adjustment\CropImageAdjustment][x]:0
     * asset[adjustments][Neos\Media\Domain\Model\Adjustment\CropImageAdjustment][y]:0
     * asset[originalAsset]:56d183f2-ee66-c845-7e2d-40661fb27571
     * @param asset
     */
    const createImageVariant = (originalAssetUuid, adjustments) => fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.core.content.createImageVariant,

        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            asset: {
                originalAsset: originalAssetUuid,
                adjustments
            }
        })
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const loadMasterPlugins = (workspaceName, dimensions) => fetchWithErrorHandling.withCsrfToken(() => ({
        url: urlWithParams(routes.core.content.loadMasterPlugins, {workspaceName, dimensions}),
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const loadPluginViews = (identifier, workspaceName, dimensions) => fetchWithErrorHandling.withCsrfToken(() => ({
        url: urlWithParams(routes.core.content.loadPluginViews, {identifier, workspaceName, dimensions}),
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const contentDimensions = (dimensionName, chosenDimensionPresets) => fetchWithErrorHandling.withCsrfToken(() => ({
        url: urlWithParams(`${routes.core.service.contentDimensions}/${dimensionName}.json`, {chosenDimensionPresets}),
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const uploadAsset = (file, propertyName, node, siteNodeName, metadata = 'Image') => fetchWithErrorHandling.withCsrfToken(csrfToken => {
        const data = new FormData();
        data.append('__siteNodeName', siteNodeName);
        data.append('asset[resource]', file);
        data.append('metadata', metadata);
        data.append('propertyName', propertyName);
        data.append('node', node);

        return {
            url: routes.core.content.uploadAsset,

            method: 'POST',
            credentials: 'include',
            headers: {
                'X-Flow-Csrftoken': csrfToken
            },
            body: data
        };
    }).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const extractFileEndingFromUri = uri => {
        const parts = uri.split('.');
        return parts.length ? '.' + parts[parts.length - 1] : '';
    };

    const assetSearch = (searchTerm = '') => fetchWithErrorHandling.withCsrfToken(() => ({
        url: urlWithParams(routes.core.service.assets, {searchTerm}),

        method: 'GET',
        credentials: 'include'
    }))
        .then(result => result.text())
        .then(result => {
            const d = document.createElement('div');
            d.innerHTML = result;
            const assetRoot = d.querySelector('.assets');

            return Array.prototype.map.call(assetRoot.querySelectorAll('.asset'), asset => ({
                dataType: 'Neos.Media:Asset',
                loaderUri: 'asset://' + asset.querySelector('.asset-identifier').innerText,
                label: asset.querySelector('.asset-label').innerText,
                preview: asset.querySelector('[rel=thumbnail]').getAttribute('href'),
                identifier: asset.querySelector('.asset-identifier').innerText
            }));
        });

    const assetDetail = identifier => fetchWithErrorHandling.withCsrfToken(() => ({
        url: `${routes.core.service.assets}/${identifier}`,

        method: 'GET',
        credentials: 'include'
    }))
        .then(result => result.text())
        .then(result => {
            const d = document.createElement('div');
            d.innerHTML = result;
            const asset = d.querySelector('.asset');

            return {
                dataType: 'Neos.Media:Asset',
                loaderUri: 'asset://' + asset.querySelector('.asset-identifier').innerText,
                label: asset.querySelector('.asset-label').innerText,
                preview: asset.querySelector('[rel=preview]').getAttribute('href'),
                identifier: asset.querySelector('.asset-identifier').innerText
            };
        });

    /**
     * searchTerm:se
     * nodeTypes[]:TYPO3.Neos.NodeTypes:Page
     * workspaceName:user-admin
     * dimensions[language][]:en_US
     * contextNode:/sites/neosdemo@user-admin;language=en_US
     *
     * !! for options, use selectors.UI.NodeLinking.contextForNodeLinking and start modifying it!
     *
     * returns an array of {label, value} objects
     */
    const searchNodes = options => fetchWithErrorHandling.withCsrfToken(() => ({
        url: urlWithParams(routes.core.service.nodes, options),

        method: 'GET',
        credentials: 'include'
    }))
        .then(result => result.text())
        .then(result => {
            const d = document.createElement('div');
            d.innerHTML = result;
            const nodes = d.querySelector('.nodes');

            return Array.prototype.map.call(nodes.querySelectorAll('.node'), node => {
                const uri = node.querySelector('.node-frontend-uri').innerText;
                return {
                    dataType: 'Neos.ContentRepository:Node',
                    loaderUri: 'node://' + node.querySelector('.node-identifier').innerText,
                    label: node.querySelector('.node-label').innerText,
                    identifier: node.querySelector('.node-identifier').innerText,
                    nodeType: node.querySelector('.node-type').innerText,
                    uri,
                    uriInLiveWorkspace: uri.split('@')[0] + extractFileEndingFromUri(uri)
                };
            });
        })
        .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const parseGetSingleNodeResult = requestPromise => {
        return requestPromise.then(result =>
            result.text().then(bodyAsString => ({bodyAsString, result}))
        ).then(({bodyAsString, result}) => {
            if (result.status === 200) {
                const d = document.createElement('div');
                d.innerHTML = bodyAsString;

                const nodeFrontendUri = d.querySelector('.node-frontend-uri').getAttribute('href');

                // Hackish way to get context string from uri
                const contextString = nodeFrontendUri.split('@')[1].split('.')[0];
                // TODO: Temporary hack due to missing contextPath in the API response
                const nodeContextPath = `${d.querySelector('.node-path').innerHTML}@${contextString}`;

                return {
                    nodeFound: true,
                    nodeFrontendUri,
                    nodeContextPath
                };
            }
            if (result.status === 404) {
                const nodeExistsInOtherDimensions = Boolean(result.headers.get('X-Neos-Node-Exists-In-Other-Dimensions'));
                const numberOfNodesMissingOnRootline = parseInt(result.headers.get('X-Neos-Nodes-Missing-On-Rootline'), 10) - 1;
                return {
                    nodeFound: false,
                    nodeExistsInOtherDimensions,
                    numberOfNodesMissingOnRootline
                };
            }
        });
    };

    /**
     * "params" is an object with:
     * - dimensions
     * - workspaceName
     *
     * !! for params, use selectors.UI.NodeLinking.contextForNodeLinking and start modifying it!
     */
    const getSingleNode = (nodeIdentifier, params = {}) => parseGetSingleNodeResult(fetchWithErrorHandling.withCsrfToken(() => ({
        url: urlWithParams(`${routes.core.service.nodes}/${nodeIdentifier}`, params),

        method: 'GET',
        credentials: 'include'
    }))).catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const adoptNodeToOtherDimension = ({identifier, targetDimensions, sourceDimensions, workspaceName, copyContent = false}) => parseGetSingleNodeResult(fetchWithErrorHandling.withCsrfToken(csrfToken => ({
        url: routes.core.service.nodes,

        method: 'POST',
        credentials: 'include',
        body: searchParams({
            identifier,
            dimensions: targetDimensions,
            sourceDimensions,
            workspaceName,
            mode: (copyContent ? 'adoptFromAnotherDimensionAndCopyContent' : 'adoptFromAnotherDimension'),
            __csrfToken: csrfToken
        })
    }))).catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const setUserPreferences = (key, value) => fetchWithErrorHandling.withCsrfToken(csrfToken => {
        const data = new URLSearchParams();
        data.set('__csrfToken', csrfToken);
        data.set('key', key);
        data.set('value', value);

        return {
            url: routes.core.service.userPreferences,

            method: 'PUT',
            credentials: 'include',
            body: data
        };
    }).catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const getWorkspaceInfo = () => fetchWithErrorHandling.withCsrfToken(() => ({
        url: routes.ui.service.getWorkspaceInfo,
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })).then(response => fetchWithErrorHandling.parseJson(response));

    const getPolicyInfo = nodeContextPaths => fetchWithErrorHandling.withCsrfToken(csrfToken => {
        return {
            url: routes.ui.service.getPolicyInfo,
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({nodes: nodeContextPaths}),
            headers: {
                'X-Flow-Csrftoken': csrfToken,
                'Content-Type': 'application/json'
            }
        };
    }).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => console.warn('Something went wrong with requesting policy information:', reason));

    const dataSource = (dataSourceIdentifier, dataSourceUri, params = {}) => fetchWithErrorHandling.withCsrfToken(() => ({
        url: urlWithParams(dataSourceUri || `${routes.core.service.dataSource}/${dataSourceIdentifier}`, params),

        method: 'GET',
        credentials: 'include'
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const getJsonResource = resourceUri => fetchWithErrorHandling.withCsrfToken(() => ({
        url: resourceUri,
        method: 'GET',
        credentials: 'include'
    })).then(response => fetchWithErrorHandling.parseJson(response))
    .catch(reason => fetchWithErrorHandling.generalErrorHandler(reason));

    const tryLogin = (username, password) => {
        const data = new URLSearchParams();
        data.set('__authentication[Neos][Flow][Security][Authentication][Token][UsernamePassword][username]', username);
        data.set('__authentication[Neos][Flow][Security][Authentication][Token][UsernamePassword][password]', password);
        // Here, we
        return fetch(routes.core.login, {
            method: 'POST',
            body: data,
            credentials: 'same-origin'
        })
        // Parse the JSON if possible ...
        .then(response => fetchWithErrorHandling.parseJson(response))
        // ... and if the JSON cannot be parsed, convert this to "false".
        .then(result => result, () => false)
        // Return the new CSRF Protection token
        .then(result => result && result.csrfToken);
    };

    return {
        loadImageMetadata,
        change,
        publish,
        discard,
        changeBaseWorkspace,
        copyNode,
        cutNode,
        clearClipboard,
        createImageVariant,
        loadMasterPlugins,
        loadPluginViews,
        uploadAsset,
        assetSearch,
        assetDetail,
        searchNodes,
        getSingleNode,
        adoptNodeToOtherDimension,
        setUserPreferences,
        dataSource,
        getJsonResource,
        getWorkspaceInfo,
        getPolicyInfo,
        tryLogin,
        contentDimensions
    };
};
