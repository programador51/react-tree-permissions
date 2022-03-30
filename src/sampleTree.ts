const permissions = [
    {
        name: "Directorio",
        id: "cd89a7a9-066d-4961-afc6-0d6d190ff97b",
        items: [
            {
                name: "Corporativo",
                id: "f00840e3-0a71-4a79-9bbf-f2df752b2c95",
                items: [
                    {
                        name: 'Asociar',
                        id: "7a7418f1-0904-4e9f-984f-ea086799779c"
                    },
                    {
                        name: "Des-asociar",
                        id: "0bab85b8-2b1f-4cbb-bd51-9a699a0f1994"
                    }
                ]
            },
            {
                name: "Agregar",
                id: "e4e2933f-9859-4d23-b747-c4d5a7a8a1e4",
            },
            {
                name: 'Editar',
                id: "86fa36b9-c20f-485b-a5f9-f521e7ce01d8"
            },
            {
                name: 'Contactos',
                id: "d6dcd435-ea1f-4a35-a0f7-89bb1822ce96",
                items: [
                    {
                        name: 'Agregar',
                        id: "3e1f306a-69c8-4d7c-b65c-5243405914d2"
                    },
                    {
                        name: 'Editar',
                        id: "284fe324-f2eb-49db-a7a2-bdb74c66eefd"
                    },
                ]
            },
            {
                name: 'Documentos',
                id: "6404fa82-d33e-44fc-83c4-66bab4cd324e",
                items: [
                    {
                        name: 'Cotizacion',
                        id: "1633f3b8-953d-4bc5-8db4-9afa6e3e7e61",
                        items: [
                            {
                                name: 'Agregar',
                                id: "137d70b3-8603-43b8-b8de-8503e490ae18",
                            },
                            {
                                name: 'Editar',
                                id: "3a505210-e0eb-4df8-b660-3a884b73460f",
                            },
                            {
                                name: 'Ver documento',
                                id: "d9390bfd-4f3b-4f0b-a3dc-f8efcf058205",
                            },
                            {
                                name: 'Enviar e-mail',
                                id: "94f0c2b1-03fd-4f8e-87eb-c46143385f9e",
                            },
                            {
                                name: 'Ganar',
                                id: "edb51d0b-b71b-4c96-b04a-2fded3017abf",
                            },
                            {
                                name: 'Asociar archivos',
                                id: "384f293a-3371-42a3-beee-f7196010b4bf",
                            },
                            {
                                name: 'Exportar PDF',
                                id: "bca70338-63fa-400a-9c05-a70f4d012481",
                            },
                            {
                                name: 'Cancelar',
                                id: "dfa178da-d655-40ce-bfba-c36cfbadda3c",
                            },

                        ]
                    },
                    {
                        name: "Pedido",
                        id: "6924e0da-7570-4d8f-95ee-d79066618696",
                        items: [
                            {
                                name: "Ver documento",
                                id: "b7227cc3-ad50-46b2-9ed3-2f9398c817a1",
                            },
                            {
                                name: "Timbrar",
                                id: "368afea7-a30f-4078-a5b3-a9cf24404b49",
                            },
                            {
                                name: "Asociar archivos",
                                id: "7f83b2ed-d8b3-4182-b09d-97ed4ea8c3ba",
                            },
                            {
                                name: "Enviar e-mail",
                                id: "0ad73060-df01-4b18-8865-7a4a4743114a",
                            },
                            {
                                name: "Exportar PDF",
                                id: "ff52ba48-7297-42d8-8a50-2d61e5b40bd8",
                            },
                            {
                                name: "Editar",
                                id: "986a627e-00b2-41e4-aa4c-8a020995becc",
                            }
                        ]
                    },
                    {
                        name: "Orden de compra",
                        id: "86e1aa7e-6daf-48e8-92a5-a090464e8c70",
                        items: [
                            {
                                name: "Ver documento",
                                id: "89111e2a-c1b2-41ab-a81c-d85402360475",
                            },
                            {
                                name: "Asociar archivos",
                                id: "8a272a53-6fe8-4af2-9aeb-f8e012d35449",
                            },
                            {
                                name: "Enviar e-mail",
                                id: "0d632b90-613e-486c-8584-7c56fe63ab0b",
                            },
                            {
                                name: "Exportar PDF",
                                id: "28886c84-68d6-4923-9546-068114fe764b",
                            },
                            {
                                name: "Editar",
                                id: "51ce9eb2-28ba-44c4-a5a2-b4481a04d2e7",
                            }
                        ]
                    },
                    {
                        name: "Contrato",
                        id: "0393fbb2-817e-4356-a5dc-dec78eb2efa8",
                        items: [
                            {
                                name: "Ver documento",
                                id: "88c7d319-c06c-46fa-b0db-9919c5404567",
                            },
                            {
                                name: "Historico",
                                id: "bd605185-806c-4196-b317-2335dc7f18d7",
                            },
                            {
                                name: "Asociar archivos",
                                id: "55163480-2f23-41e0-865c-ebef9a0cd4f4",
                            },
                            {
                                name: "Enviar e-mail",
                                id: "fcf8a510-b7af-409d-9856-d541e1eb00ab",
                            },
                            {
                                name: "Exportar PDF",
                                id: "fa7f06cf-03ff-4c1d-9b96-990c1ce3a3f1",
                            },
                            {
                                name: "Editar",
                                id: "f1b1aca9-1b14-4713-9536-c665f7168d17",
                            },
                            {
                                name: "Terminar",
                                id: "9a61f298-85bc-4178-945a-ab39a5ec3901",
                            },
                        ]
                    }
                ]
            }
        ],
    },
    {
        name: "Bancos",
        id: "299d8d69-5525-4b2a-b824-47947008853e",
        items: [
            {
                name: "Agregar",
                id: "78dc3e8a-6c74-45a1-b732-d598542f3439"
            },
            {
                name: "Editar",
                id: "802701fc-c731-40d0-ba4f-50e65dfdb8a8"
            },
            {
                name: "Movimientos",
                id: "151bb9ae-1162-43c6-beb5-c804a5766e84",
                items: [

                    {
                        name: "Ingreso",
                        id: "23beca91-4544-43ff-8f54-08f492c69adc",
                        items: [
                            {
                                name: "Agregar",
                                id: "30e4099b-5b86-4a1d-a725-fbb4bfbc3efa",
                            },
                            {
                                name: "Asociar",
                                id: "6d07acb5-a9fb-40d3-92f0-8223e1a3d163",
                            },
                            {
                                name: "Cancelar",
                                id: "f6b3d381-7672-446d-b5a7-a3eeda7270f8",
                            },
                            {
                                name: "Editar",
                                id: "80e2c85e-c46e-4b13-850a-047ffb88cca7",
                            },
                            {
                                name: "PDF",
                                id: "2f9beeab-d15f-476a-8fe6-4d1756e66f73",
                            }
                        ]
                    },
                    {
                        name: "Egreso",
                        id: "c3ccc069-cb68-4af8-be59-a3563528be51",
                        items: [
                            {
                                name: "Agregar",
                                id: "e68ea8ae-a287-42e7-ab9f-5aabab774bb5",
                            },
                            {
                                name: "Editar",
                                id: "233c2899-191c-4d3e-aa0e-b9db0dff8e91",
                            },
                            {
                                name: "PDF",
                                id: "0e42281e-fa77-4fcb-8931-ae1c2714f312",
                            },
                            {
                                name: "Asociar",
                                id: "2502dcac-764a-46ee-920f-e30159057769",
                            },
                            {
                                name: "Cancelar",
                                id: "5388c282-33e5-41b9-a429-f892025723a3",
                            }
                        ]
                    }
                ]
            },

        ]
    },
    {
        name: "Administracion",
        id: "bade8891-f19c-47c1-b11a-14264116357f",
        items: [
            {
                name: "Facturas emitidas",
                id: "d1fb439b-5a50-4593-9d64-a3232fa8d2db",
                items: [
                    {
                        name: "Agregar",
                        id: "bb717907-36c8-4afa-9424-b7eeb470b2be",
                    },
                    {
                        name: "Editar",
                        id: "5cd39313-1e40-4946-9ac5-3d378c018cc5",
                    },
                    {
                        name: "Cancelar",
                        id: "e4e6c44e-8895-4da1-9149-2eec4a249f8f",
                    },
                    {
                        name: "Asociar archivos",
                        id: "5cf23c22-2e2b-4d5a-9130-69986524e067",
                    },
                    {
                        name: "Enviar e-mail",
                        id: "9b9e6970-4e71-4d15-854d-73a619b8caa5",
                    }
                ]
            },
            {
                name: "Facturas recibidas",
                id: "6d90baa4-5d05-4237-8405-b45017bdbbe2",
                items: [
                    {
                        name: "Agregar",
                        id: "a0bb46fd-bfee-4790-aee5-72631da1b59c",
                    },
                    {
                        name: "Asociar archivos",
                        id: "ead650f6-8168-4005-bdf3-887cf108b6fb",
                    },
                    {
                        name: "Cancelar",
                        id: "e3b6de16-9d3d-4bf3-8f60-20cc2130ddb4",
                    }
                ]
            }
        ]
    },
    {
        name: "Procesos especiales",
        id: "af1c056d-81ad-4c11-844c-707b5d7fd2e6",
        items: [
            {
                name: "Avisos",
                id: "2e1d85de-44e6-4b14-800f-0452f090681d",
            },
            {
                name: "Roles",
                id: "9b9d9d4c-e87c-4516-a971-f5251493c62d",
            },
            {
                name: "Usuarios",
                id: "bb8b4c5a-ed0d-476c-9e36-b1b66b326105",
            },
        ]
    }
];

export default permissions;